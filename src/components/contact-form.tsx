'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { normalizarTelefone } from '@/lib/utils'

const phoneRegex = new RegExp(
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
)

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: 'Nome deve ter pelo menos 2 caracteres',
    })
    .refine((name) => name.trim().split(' ').length > 1, {
      message: 'Nome deve ser composto',
    }),
  phone: z.string().regex(phoneRegex, {
    message: 'Número de telefone inválido',
  }),
  email: z.string().email({
    message: 'Email inválido',
  }),
  message: z.string().min(10, {
    message: 'Mensagem deve ter pelo menos 10 caracteres',
  }),
})

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      const data = await response.json()

      if (data.success) {
        toast({
          title: 'Sucesso!',
          description: 'Sua mensagem foi enviada com sucesso.',
          variant: 'success',
        })
        form.reset()
      } else {
        toast({
          title: 'Erro!',
          description: 'Não foi possível enviar sua mensagem. Tente novamente.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'Erro!',
        description: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-[url('/background/Desktop/fundoBoneco.png')] bg-cover">
      <div className="flex justify-center py-2 lg:py-8">
        <div className="flex max-w-[320px] items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">
            Contato
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="container mx-auto max-w-md p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 py-2"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Nome Completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite seu nome completo"
                      className="bg-[#C7C7D7] focus:border-[#5638C9] focus:ring-[#5638C9]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Telefone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(11) 99999-9999"
                      className="bg-[#C7C7D7] focus:border-[#5638C9] focus:ring-[#5638C9]"
                      type="tel"
                      maxLength={15}
                      {...field}
                      onChange={(e) => {
                        const maskedValue = normalizarTelefone(e.target.value)
                        field.onChange(maskedValue)
                      }}
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
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="seu@email.com"
                      className="bg-[#C7C7D7] focus:border-[#5638C9] focus:ring-[#5638C9]"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite sua mensagem"
                      className="bg-[#C7C7D7] focus:border-[#5638C9] focus:ring-[#5638C9]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <Button
                className="relative inline-flex h-12 w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                type="submit"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar'
                  )}
                </span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  )
}
