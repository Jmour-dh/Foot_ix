import axios from "axios";

const API_JOUEURS = "/api/joueurs";

export async function createJoueur(newJoueur) {
  try {
    const response = await axios.post(API_JOUEURS, newJoueur);

    return response.data;
  } catch (error) {
    if (error.response) {
      // La requête a été faite, mais le serveur a répondu avec un code de statut autre que 2xx
      throw error.response.data;
    } else if (error.request) {
      // La requête a été faite, mais aucune réponse n'a été reçue
      throw new Error("Aucune réponse du serveur");
    } else {
      // Une erreur s'est produite lors de la configuration de la requête
      throw new Error("Erreur de configuration de la requête");
    }
  }
}

