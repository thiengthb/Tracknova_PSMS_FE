"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { type HomeFormProps } from './CompleteForm'

const formSchema = z.object({
    amount: z
        .string()
        .max(10, { message: "Số tiền trả không hợp lệ" })
        .refine((val) => {
            const num = Number(val)
            return !isNaN(num) && num > 0
        }, { message: "Số tiền cần trả phải lớn 0" })
})

export type FormData = z.infer<typeof formSchema>

function RemainForm({ onCancleClick, onConfirmClick, tab }: HomeFormProps) {

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            amount: "0"
        }
    })

    const handleSubmit = (value: FormData) => {
        if (!onConfirmClick) return;
        const num = Number(value.amount)
        if (!isNaN(num) && num > 0) {
            form.reset({ amount: "0" })
            onConfirmClick(num)
        }

    }

    return (
        <div className="relative bg-white rounded-[15px] w-[300px] px-[25px] py-[30px]">

            <svg onClick={onCancleClick} className="absolute right-10 hover:cursor-pointer" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.4999 17.5366L22.3382 26.3749C22.8072 26.8439 23.4433 27.1074 24.1066 27.1074C24.7698 27.1074 25.4059 26.8439 25.8749 26.3749C26.3439 25.9059 26.6074 25.2699 26.6074 24.6066C26.6074 23.9434 26.3439 23.3073 25.8749 22.8383L17.0332 13.9999L25.8732 5.16161C26.1054 4.92939 26.2895 4.65372 26.415 4.35035C26.5406 4.04698 26.6052 3.72185 26.6051 3.39352C26.605 3.06518 26.5403 2.74008 26.4146 2.43677C26.2889 2.13346 26.1046 1.85788 25.8724 1.62577C25.6402 1.39366 25.3645 1.20956 25.0612 1.08399C24.7578 0.95841 24.4327 0.893817 24.1043 0.893894C23.776 0.893972 23.4509 0.958718 23.1476 1.08444C22.8443 1.21016 22.5687 1.39439 22.3366 1.62661L13.4999 10.4649L4.66158 1.62661C4.43107 1.38772 4.1553 1.19714 3.85035 1.06598C3.5454 0.934813 3.21739 0.865694 2.88544 0.862654C2.5535 0.859614 2.22427 0.922713 1.91697 1.04827C1.60967 1.17383 1.33046 1.35933 1.09562 1.59395C0.860774 1.82857 0.67501 2.10761 0.549163 2.41479C0.423316 2.72197 0.359906 3.05114 0.362633 3.38309C0.36536 3.71503 0.434169 4.04312 0.565046 4.34819C0.695922 4.65326 0.886245 4.92921 1.12491 5.15994L9.96658 13.9999L1.12658 22.8399C0.887913 23.0707 0.69759 23.3466 0.566713 23.6517C0.435836 23.9568 0.367027 24.2848 0.3643 24.6168C0.361573 24.9487 0.424983 25.2779 0.55083 25.5851C0.676677 25.8923 0.86244 26.1713 1.09728 26.4059C1.33212 26.6405 1.61134 26.826 1.91864 26.9516C2.22594 27.0772 2.55516 27.1403 2.88711 27.1372C3.21905 27.1342 3.54707 27.0651 3.85202 26.9339C4.15697 26.8027 4.43274 26.6122 4.66324 26.3733L13.4999 17.5366Z" fill="black" />
            </svg>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className='flex flex-col gap-[20px]'>
                    <input type="hidden" name='tab' value={tab} />
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-opensans text-[24px] font-bold'>Nhập tiền trả</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        placeholder="Nhập số tiền khách đã trả"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-full flex justify-center">
                        <Button
                            type="submit"
                            className='w-[180px] h-[60px] px-[20px] py-[10px] rounded-[20px] bg-[#BEF0FF] text-[#565656] font-bold font-monsterat text-[20px] hover:cursor-pointer focus:bg-[#0093CB] focus:text-white'>
                            Xác nhận
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default RemainForm
