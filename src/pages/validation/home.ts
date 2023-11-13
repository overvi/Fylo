import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    email: z
      .string({ invalid_type_error: "Required" })
      .email({ message: "Please Enter a Valid Email Address" }),
    });
    
type validation = z.infer<typeof schema>;

const useValidation = () => {
      const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm<validation>({ resolver: zodResolver(schema) });

      return {errors , register , handleSubmit}
}

export default useValidation