import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

export const useVote = () => {
  const getVote = async (id: string) => {
    const vote = await getDoc(doc(db, "votes", id));
    return vote.data();
  }

  const incrementVote = async (id: string) => {
    try {
      const vote = await getVote(id);
      
      const newVote = await setDoc(doc(db, "votes", id), {
        id: id,
        count: vote?.count ? vote?.count + 1 : 1,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { incrementVote };
};
