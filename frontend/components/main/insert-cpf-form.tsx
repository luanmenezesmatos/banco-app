'use client';

import { siteConfig } from '@/config/site';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

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
    .length(11, 'Precisamos de um CPF válido.'),
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
                          <Input id="cpf" {...field} />
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
