'use client';

import { siteConfig } from '@/config/site';
import { validateCPF } from '@/lib/utils';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

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
    console.log(values);
  };

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
                          {/* <Input
                            id="cpf"
                            {...field}
                            placeholder="123.456.789-00"
                            data-mask="000.000.000-00"
                          /> */}
                          <InputMask
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            mask="999.999.999-99"
                            maskChar={null}
                            value={form.getValues('cpf')}
                            onChange={(e) => form.setValue('cpf', e.target.value)}
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
            <Button>
              Continuar <Icons.arrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
