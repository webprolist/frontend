
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import MaxWidthWrapper from "@/components/MaxWidthWrapper"

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters").refine(
    (password) => /^[a-zA-Z0-9!@$%^*()_+\-=\[\]{}]+$/.test(password),
    "Password contains invalid characters"
  ),
});

type loginFormData = z.infer<typeof loginSchema>;

const SignIn: React.FC = () => {
  const loginForm = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = async (data: loginFormData) => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password // 비밀번호를 문자열 그대로 전송
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const result = await response.json();
      console.log('Login successful:', result);
      // 로그인 성공 후 처리 (예: 상태 업데이트, 리다이렉트 등)
    } catch (error) {
      console.error('Login error:', error);
      // 에러 처리 (예: 에러 메시지 표시)
    }
  }

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center pt-36 py-2">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              로그인
            </Button>
            <Button type="submit" className="w-full" variant={"outline"} >
              회원가입
            </Button>
          </form>
        </Form>
      </div>
    </MaxWidthWrapper>
  );
}




export default SignIn;