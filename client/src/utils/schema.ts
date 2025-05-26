import * as Yup from "yup";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
const nameRegex = /^[A-Za-zğüşöçıİĞÜŞÖÇ\s]+$/;

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Geçersiz email").required("Email gerekli"),
  password: Yup.string().required("Şifre gerekli"),
});

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Ad gerekli")
    .min(3, "En az 3 karakter içermelidir")
    .matches(nameRegex, "Rakam boşluk ve özel karakterler içermemeli"),
  lastName: Yup.string()
    .required("Soyad gerekli")
    .min(3, "En az 3 karakter içermelidir")
    .matches(nameRegex, "Rakam boşluk ve özel karakterler içermemeli"),
  email: Yup.string().email("Geçersiz email").required("Email gerekli"),
  password: Yup.string()
    .required("Şifre gerekli")
    .matches(passwordRegex, "Şifreniz yeterince güçlü değil"),
});

export { loginSchema, registerSchema };
