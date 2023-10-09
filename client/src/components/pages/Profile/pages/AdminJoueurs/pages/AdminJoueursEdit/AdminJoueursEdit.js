import styles from "./AdminJoueursEdit.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

function AdminJoueursEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const validationSchema = yup.object({
    jerseyNumber: yup.number().required("Entrez le numéro du malliot"),
    firstname: yup
      .string()
      .required("Il faut préciser votre nom")
      .min(2, "Un vrai nom"),
    lastname: yup
      .string()
      .required("Il faut préciser votre prénom")
      .min(2, "Un vrai nom"),
    age: yup.number().required("Il faut préciser l'age"),
    dateOfBirth: yup.date().required("Il faut préciser la date de naissance"),
    height: yup.string().required("Il faut préciser la longueur du joueur"),
    country: yup.string().required("Il faut préciser le pays du joueur"),
    countryFlag: yup
      .string()
      .required("Il faut préciser le drapeau du pays du joueur"),
    currentClub: yup
      .string()
      .required("Il faut préciser l'expression du club actuel du joueur"),
    currentClubLogo: yup
      .string()
      .required("Il faut préciser le logo de l'expression du club du joueur"),
    atCurrentClubSince: yup
      .date()
      .required("Il faut préciser la date d'inscription"),
    position: yup.string().required("Il faut préciser la position du joueur"),
    appearancesForCurrentClub: yup
      .number()
      .required("Il faut préciser l'apparitions pour le club"),
    goalsConcededForCurrentClub: yup.number(),
    cleanSheetsForCurrentClub: yup.number(),
    photo: yup.string().required("Il faut préciser la photo du joueur"),
  });

  const initialValues = {
    jerseyNumber: "",
    firstname: "",
    lastname: "",
    age: "",
    dateOfBirth: "",
    height: "",
    country: "",
    countryFlag: "",
    currentClub: "",
    currentClubLogo: "",
    atCurrentClubSince: "",
    position: "",
    appearancesForCurrentClub: "",
    goalsConcededForCurrentClub: "",
    cleanSheetsForCurrentClub: "",
    photo: "",
  };

  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });
  // const submit = handleSubmit(async (joueur) => {
  //   try {
  //     clearErrors();
  //     navigate("/profile/players/list");
  //   } catch (message) {
  //     setError("generic", { type: "generic", message });
  //   }
  // });

  useEffect(() => {
    const fetchJoueurById = async () => {
      try {
        const response = await axios.get(`/api/joueurs/${id}`);
        const joueur = response.data;

        // Pré-remplir le formulaire avec les détails du joueur
        Object.keys(joueur).forEach((key) => {
          setValue(key, joueur[key]);
        });
      } catch (error) {
        console.error("Erreur lors de la récupération du joueur par ID :", error);
      }
    };

    fetchJoueurById();
  }, [id, setValue]);

  const submit = handleSubmit(async (joueur) => {
    try {
      clearErrors();
      // Envoyez la mise à jour au backend
      await axios.put(`/api/joueurs/${id}`, joueur);
      // Redirigez vers la liste des joueurs après la mise à jour
      navigate("/profile/players/list");
    } catch (error) {
      setError("generic", { type: "generic", message: error.message });
    }
  });

  return (
    <div className={styles.test}>
      <h2>Modifier un joueur</h2>
      <div className={styles.cnx}>
        <div className={styles.signin}>
          <form onSubmit={submit}>
            <input
              type="Number"
              name="jerseyNumber"
              placeholder="Entrez le numéro du malliot..."
              {...register("jerseyNumber")}
            />
            {errors.jerseyNumber && (
              <p className="form-error">{errors.jerseyNumber.message}</p>
            )}
            <input
              type="text"
              name="firstname"
              placeholder="Entrez le nom du joueur..."
              {...register("firstname")}
            />
            {errors.firstname && (
              <p className="form-error">{errors.firstname.message}</p>
            )}
            <input
              type="text"
              name="lastname"
              placeholder="Entrez le prénom du joueur..."
              {...register("lastname")}
            />
            {errors.lastname && (
              <p className="form-error">{errors.lastname.message}</p>
            )}
            <input
              type="number"
              name="age"
              placeholder="Entrez l'âge du joueur..."
              {...register("age")}
            />
            {errors.age && <p className="form-error">{errors.age.message}</p>}
            <input
              type="date"
              name="dateOfBirth"
              placeholder="Entrez la date de naissance du joueur..."
              {...register("dateOfBirth")}
            />
            {errors.dateOfBirth && (
              <p className="form-error">{errors.dateOfBirth.message}</p>
            )}
            <input
              type="double"
              name="height"
              placeholder="Entrez la taille du joueur..."
              {...register("height")}
            />
            {errors.height && (
              <p className="form-error">{errors.height.message}</p>
            )}
            <input
              type="text"
              name="country"
              placeholder="Entrez le pays du joueur..."
              {...register("country")}
            />
            {errors.country && (
              <p className="form-error">{errors.country.message}</p>
            )}
            <input
              type="text"
              name="countryFlag"
              placeholder="Entrez le drapeau du pays du joueur..."
              {...register("countryFlag")}
            />
            {errors.countryFlag && (
              <p className="form-error">{errors.countryFlag.message}</p>
            )}
            <input
              type="text"
              name="currentClub"
              placeholder="Entrez le nom du club actuel du joueur..."
              {...register("currentClub")}
            />
            {errors.currentClub && (
              <p className="form-error">{errors.currentClub.message}</p>
            )}
            <input
              type="text"
              name="currentClubLogo"
              placeholder="Entrez le logo du club actuel du joueur..."
              {...register("currentClubLogo")}
            />
            {errors.currentClubLogo && (
              <p className="form-error">{errors.currentClubLogo.message}</p>
            )}
            <input
              type="date"
              name="atCurrentClubSince"
              placeholder="Entrez la date à laquelle le joueur a rejoint le club..."
              {...register("atCurrentClubSince")}
            />
            {errors.atCurrentClubSince && (
              <p className="form-error">{errors.atCurrentClubSince.message}</p>
            )}
            <input
              type="text"
              name="position"
              placeholder="Entrez la position jouée par le joueur..."
              {...register("position")}
            />
            {errors.position && (
              <p className="form-error">{errors.position.message}</p>
            )}
            <input
              type="number"
              name="appearancesForCurrentClub"
              placeholder="Entrez le nombre d'apparitions du joueur pour le club actuel..."
              {...register("appearancesForCurrentClub")}
            />
            {errors.appearancesForCurrentClub && (
              <p className="form-error">
                {errors.appearancesForCurrentClub.message}
              </p>
            )}
            <input
              type="number"
              name="goalsConcededForCurrentClub"
              placeholder="Entrez les buts encaissés par le joueur..."
              {...register("goalsConcededForCurrentClub")}
            />
            {errors.goalsConcededForCurrentClub && (
              <p className="form-error">
                {errors.goalsConcededForCurrentClub.message}
              </p>
            )}
            <input
              type="text"
              name="cleanSheetsForCurrentClub"
              placeholder="Entrez les cartes pour le club actuel du joueur..."
              {...register("cleanSheetsForCurrentClub")}
            />
            {errors.cleanSheetsForCurrentClub && (
              <p className="form-error">
                {errors.cleanSheetsForCurrentClub.message}
              </p>
            )}
            <input
              type="text"
              name="photo"
              placeholder="Entrez la photo du joueur..."
              {...register("photo")}
            />
            {errors.photo && (
              <p className="form-error">{errors.photo.message}</p>
            )}
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

export default AdminJoueursEdit;
