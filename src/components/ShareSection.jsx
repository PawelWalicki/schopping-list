import { SharedUserRow } from './SharedUserRow';
import { TextField, Button } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { shareListWithUser } from "../services/shoppingListService";
import { useState } from 'react';
import './ShareSection.css'

export const ShareSection = ({ list }) => {
    const [shareWithInput, setShareWithInput] = useState('')
    return (
        <div className="share-Box">
            <TextField
                label="email"
                value={shareWithInput}
                onChange={(e) => setShareWithInput(e.target.value)}
                sx={{
                    marginRight: "1vw",
                    marginBottom: "1vh",
                    "& .MuiOutlinedInput-root": {
                        color: "#417f9e",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#417f9e",
                            borderWidth: "2px",
                        },
                    },
                    "& .MuiInputLabel-outlined": {
                        color: "#417f9e",
                    },
                }} ></TextField>
            < Button
                onClick={() => shareListWithUser(list.id, shareWithInput)}
                style={{
                    backgroundColor: "#f0a54a",
                    color: "#ffffff",
                }}>SHARE!</Button>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Shared with:
                </AccordionSummary>
                <AccordionDetails>
                    {list.sharedWith && Object.entries(list.sharedWith).map(([userId, user]) => (
                        <SharedUserRow userId={userId} listId={list.id} user={user}/>
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}