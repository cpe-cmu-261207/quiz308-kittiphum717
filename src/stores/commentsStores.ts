import {Store} from "pullstate";
import { CommentType,comments } from "../data/comments";

type commnetsStoresType = {
    comments : CommentType[];
}

export const commentsStoes = new Store<commnetsStoresType>({
    comments : comments
})