"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { socials } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { addToWaitlist } from "@/lib/api/waitlist.api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Info, Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
});

export type WaitlistSchema = z.infer<typeof formSchema>;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Waitlist = ({ isOpen, onClose }: Props) => {
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const [successResponse, setSuccessResponse] = useState<string | null>(null);
  const [isLoading, setIsLaoding] = useState(false);

  const form = useForm<WaitlistSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: WaitlistSchema) {
    setErrorResponse(null);
    setSuccessResponse(null);

    setIsLaoding(true);

    try {
      await addToWaitlist(values);
      setSuccessResponse("your email has been added");

      setIsLaoding(false);
    } catch (err) {
      setErrorResponse("something went wrong");

      setIsLaoding(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Submit your email address to join the waitlist
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 my-3"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email address" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className={"w-full"} type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit
            </Button>
          </form>
        </Form>

        {successResponse && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{successResponse}</AlertDescription>
          </Alert>
        )}

        {errorResponse && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorResponse}</AlertDescription>
          </Alert>
        )}

        <section className={"v-stack space-y-3"}>
          <span>Join our community</span>
          <div className={"h-stack items-center space-x-4"}>
            {socials.map((s) => (
              <Link key={s.id} href={s.link} target={"_blank"}>
                <Image src={s.icon} width={30} height={30} alt={s.name} />
              </Link>
            ))}
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default Waitlist;
