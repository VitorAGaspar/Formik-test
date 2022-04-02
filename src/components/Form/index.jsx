import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./style.css";
import { LoginSchema } from "../../Schema/LoginSchema";

const SignForm = () => {
  return (
    <section>
      <Formik
        initialValues={{ email: "", senha: "" }}
        validationSchema={LoginSchema}
      >
        {({ errors, touched }) => (
          <Form className="c-form">
            <label className="c-form__label" htmlFor="email">
              Email
            </label>
            <Field
              className="c-form__input"
              type="text"
              name="email"
              placeholder="Insira um email válido"
            />
            {errors.email && touched.email ? (
              <span className="c-form__error">{errors.email}</span>
            ) : null}
            <label className="c-form__label" htmlFor="senha">
              Senha
            </label>
            <Field
              className="c-form__input"
              type="password"
              name="senha"
              placeholder="Mínimo de 6 caracteres"
            />
            {errors.senha && touched.senha ? (
              <span className="c-form__error">{errors.senha}</span>
            ) : null}
            <button type="submit" className="c-form__button">
              Login
            </button>
          </Form>
        )}
      </Formik>
      <p>Esqueceu a senha?</p>
    </section>
  );
};

export default SignForm;
