import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório.'),
  cpf: Yup.string().required('CPF é obrigatório'),
  password: Yup.string().required(('Senha é obrigatório')),
  passwordConfirmation: Yup
    .string()
    .required('Confirmação da senha é obrigatória.')
    .oneOf([Yup.ref('password'), null], 'A senha está diferente, tente de novo.'),
});

export type SignIn = Yup.InferType<typeof schema>;


