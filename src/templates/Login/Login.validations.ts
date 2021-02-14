import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório.'),
  password: Yup.string().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    'A senha deve conter mais de 8 caracteres.',
  ).required(('Senha é obrigatório')),
});

export type SignIn = Yup.InferType<typeof schema>;
