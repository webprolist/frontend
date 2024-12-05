
// import { z } from "zod";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper"

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";


// const formSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(4, "Password must be at least 4 characters"),
// });

// const SignIn: React.FC = () => {
//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     }
//   })

//   const onSubmit = (data: FormData) => {
//     console.log({
//       email: data.email,
//       password: parseInt(data.password, 20)
//     })



//   }

//   return (
//     <MaxWidthWrapper>
//       <div className="flex flex-col items-center justify-center pt-36 py-2">
//         <h1 className="text-2xl font-bold mb-6">Sign In</h1>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter your email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" placeholder="Enter your password" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" className="w-full">
//               Sign In
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </MaxWidthWrapper>
//   );
// }




// export default SignIn;