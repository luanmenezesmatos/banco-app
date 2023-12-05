'use client';

import { useState } from 'react';

import { siteConfig } from '@/config/site';
import { validateCPF } from '@/lib/utils';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/icons';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const formSchema = z.object({
  cpf: z
    .string({
      required_error: 'Precisamos de um CPF válido.',
    })
    .refine((value) => validateCPF(value), {
      message: 'Precisamos de um CPF válido.',
    }),
});

export function InsertCPFForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsOpen(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Peça sua conta e<br /> cartão de crédito do {siteConfig.name}
        </CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor="cpf">CPF</FormLabel>
                        <FormControl>
                          <InputMask
                            type="tel"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            mask="999.999.999-99"
                            value={form.getValues('cpf')}
                            onChange={(e) =>
                              form.setValue('cpf', e.target.value)
                            }
                          />
                        </FormControl>
                        <FormDescription>Digite o seu CPF</FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {isOpen ? (
              <Sheet>
                <SheetTrigger>
                  <Button type="submit">
                    Continuar <Icons.arrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="full">
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        value="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            ) : (
              <Button type="submit">
                Continuar <Icons.arrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
