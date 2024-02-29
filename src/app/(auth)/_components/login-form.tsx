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
import { LoginSchema } from '@/schema';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ["latin"], weight: ["100","200","300","400", "500", "600", "700", "800", "900"] });


const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("")
    setSuccess("")

    
    }
    
  
    


  return (
    <CardWrapper
     headerLabel="welcome back"
     backButtonLabel="Don't have an account?"
     backButtonHref="/register"
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
                    name="email"
                    render={({ }) => (
                      <FormItem>
                            <FormLabel className="text-lg px-1">Email</FormLabel>
                            <FormControl>
                              <Input 
                                className={`${poppins.className} text-sm`}
                                disabled={isPending}
                                placeholder="example@example.com"
                                type="email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control}
                    name="password"
                    render={({}) => (
                      <FormItem>
                            <FormLabel className="text-lg px-1">Password</FormLabel>
                            <FormControl>
                              <Input 
                                className={`${poppins.className} text-sm`} 
                                disabled={isPending}
                                placeholder="Pass@123"
                                type="password"
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
                  Login
                </Button>
           </form>
        </Form>
    </CardWrapper>
  )
}

export default LoginForm