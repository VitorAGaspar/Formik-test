import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("email necessário"),
  senha: Yup.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Senha necessária"),
});
