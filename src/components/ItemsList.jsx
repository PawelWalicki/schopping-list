import { AddItem } from "./AddItem"
import { ItemsHeader } from "./ItemsHeader";
import { ItemsListItems } from "./ItemsListItems";
import { ShareSection } from "./ShareSection";
import './ItemsList.css';

export const ItemsList = ({ list }) => {

    return (
        <div className="container-Item">
            <ItemsHeader list={list} />
            <ItemsListItems list={list} />
            <AddItem listId={list.id} />
            {list.isOwner && (
                <ShareSection list={list} />
            )}
        </div>

    )
}