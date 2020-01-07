import React from 'react';
import NOTES from '../NOTES/NOTES';

const NoteContext = React.createContext({
    storedNotes: { NOTES }
})

export default NoteContext;