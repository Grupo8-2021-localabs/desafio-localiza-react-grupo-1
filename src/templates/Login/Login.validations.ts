import * as Yup from 'yup';

export const schema = Yup.object().shape({
  cpf: Yup.string().required('CPF é obrigatório'),
  password: Yup.string().required(('Senha é obrigatório')),
});

export type SignIn = Yup.InferType<typeof schema>;
