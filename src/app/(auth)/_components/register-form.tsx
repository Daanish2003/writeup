"use client"

import React, { useState, useTransition } from 'react'
import { CardWrapper } from './card-wrapper'
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormError } from './form-error'; 
import { FormSuccess } from './form-success';
import { RegisterSchema } from '@/schema';
import { Inter, Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ["latin"], weight: ["100","200","300","400", "500", "600", "700", "800", "900"] });


const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  })




  return (
    <CardWrapper
     headerLabel="Create an account"
     backButtonLabel="Already have an account"
     backButtonHref="/login"
     showSocial
    >
        <Form {...form}>
           <form 
              onSubmit={form.handleSubmit(() => {})}
              className="space-y-6"
              >
                <div className="space-y-4">
                <FormField 
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                            <FormLabel className="text-lg px-1">Name</FormLabel>
                            <FormControl>
                              <Input 
                                className={`${poppins.className} text-sm`}
                                {...field}
                                disabled={isPending}
                                placeholder="daanish"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                            <FormLabel className="text-lg px-1">Email</FormLabel>
                            <FormControl>
                              <Input 
                                {...field}
                                disabled={isPending}
                                placeholder="example@example.com"
                                type="email"
                                className={`${poppins.className} text-sm`}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                            <FormLabel className="text-lg px-1">Password</FormLabel>
                            <FormControl>
                              <Input 
                                {...field}
                                disabled={isPending}
                                placeholder="Pass@123"
                                type="password"
                                className={`${poppins.className} text-xs` }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                    )}
                  />
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button
                disabled={isPending}
                 type="submit"
                 className="w-full text-xl"
                >
                  Create an account
                </Button>
           </form>
        </Form>
    </CardWrapper>
  )
}

export default RegisterForm