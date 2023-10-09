import React from "react";
import styles from "./Signup.module.scss";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../apis/users";

function Signup() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Il faut préciser votre nom")
      .min(2, "Un vrai nom"),
    lName: yup
      .string()
      .required("Il faut préciser votre nom")
      .min(2, "Un vrai nom"),
    email: yup
      .string()
      .required("Il faut préciser votre email")
      .email("L'email n'est pas valide"),
    password: yup
      .string()
      .required("Il faut préciser votre mot de passe")
      .min(6, "Mot de passe trop court"),
    confirmPassword: yup
      .string()
      .required("Vous devez confirmer votre mot de passe")
      .oneOf(
        [yup.ref("password"), ""],
        "Les mots de passe ne correspondent pas"
      ),
  });

  const initialValues = {
    name: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });
  const submit = handleSubmit(async (user) => {
    try {
      clearErrors();
      await createUser(user);
      navigate("/signin");
    } catch (message) {
      setError("generic", { type: "generic", message });
      
    }
  });
  return (
    <div className={styles.test}>
      <h2>Ajouter un admin</h2>
      <div className={styles.cnx}>
        <div className={styles.signin}>
          <form onSubmit={submit}>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="name" className="mb-10">
                Nom :
              </label>
              <input
                type="text"
                name="name"
                placeholder="Entrez le nom..."
                {...register("name")}
              />
              {errors.name && (
                <p className="form-error">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="lName" className="mb-10">
                Prénom :
              </label>
              <input
                type="text"
                name="lName"
                placeholder="Entrez le prénom..."
                {...register("lName")}
              />
              {errors.lName && (
                <p className="form-error">{errors.lName.message}</p>
              )}
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="email" className="mb-10">
                Email :
              </label>
              <input
                type="text"
                name="email"
                placeholder="Entrez votre mail..."
                {...register("email")}
              />
              {errors.email && (
                <p className="form-error">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="password" className="mb-10">
                Mot de passe :
              </label>
              <input
                type="password"
                name="password"
                placeholder="Entrez votre mot de passe..."
                {...register("password")}
              />
              {errors.password && (
                <p className="form-error">{errors.password.message}</p>
              )}
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="confirmPassword" className="mb-10">
                Vérification mot de passe :
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Entrez votre mot de passe..."
                {...register("confirmPassword")}
              />
               {errors.confirmPassword && (
                <p className="form-error">{errors.confirmPassword.message}</p>
              )}
            </div>
            {errors.generic && (
              <div className="mb-10">
                <p className="form-error">{errors.generic.message}</p>
              </div>
            )}
            <div className={styles.heroBannerButton}>
              <button disabled={isSubmitting}>Valider</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
