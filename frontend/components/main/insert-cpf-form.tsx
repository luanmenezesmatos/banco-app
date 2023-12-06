'use client';

import { useState, useEffect } from 'react';

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

  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedSheet, setHasOpenedSheet] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (await form.trigger()) {
      if (form.formState.isValid && !hasOpenedSheet) {
        console.log('entrou');
        setIsOpen(true);
      }

      if (form.formState.isValid && isOpen) {
        console.log('enviou');
        setHasOpenedSheet(true);
      }
    }
  };

  useEffect(() => {
    if (!isOpen) {
      form.reset();
    }
  }, [isOpen, form]);

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
                  render={() => (
                    <FormItem>
                      <FormLabel htmlFor="cpf">CPF</FormLabel>
                      <FormControl>
                        <InputMask
                          type="tel"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          mask="999.999.999-99"
                          value={form.getValues('cpf')}
                          onChange={(e) => form.setValue('cpf', e.target.value)}
                        />
                      </FormControl>
                      <FormDescription>Digite o seu CPF</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {isOpen ? (
              <Sheet>
                {!hasOpenedSheet && form.formState.isValid ? (
                  <SheetTrigger>
                    <Button type="submit">
                      Cadastrar <Icons.arrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </SheetTrigger>
                ) : hasOpenedSheet && !form.formState.isValid ? (
                  <SheetTrigger>
                    <Button type="submit">
                      Cadastrar <Icons.arrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </SheetTrigger>
                ) : /* hasOpenedSheet && form.formState.isValid ? (
                  <SheetTrigger>
                    <Button type="submit">
                      Continuar <Icons.arrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </SheetTrigger>
                ) :  */(
                  <Button type="submit">
                    Cadastrar <Icons.arrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}

                <SheetContent side="full">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        Peça sua conta e<br /> cartão de crédito do{' '}
                        {siteConfig.name}
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
                                render={() => (
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
                                    <FormDescription>
                                      Digite o seu CPF
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          {hasOpenedSheet && form.formState.isValid ? (
                            <SheetTrigger>
                              <Button type="submit">
                                Cadastrar{' '}
                                <Icons.arrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </SheetTrigger>
                          ) : (
                            <SheetFooter>
                              <SheetClose>Fechar</SheetClose>
                            </SheetFooter>
                          )}
                        </CardFooter>
                      </form>
                    </Form>
                  </Card>
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
