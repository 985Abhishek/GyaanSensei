import React, { useState } from "react";
import { Modal, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useSocket } from "./SocketContext";

const CommentModal = ({ open, onClose, profileId, userId, onCommentAdded }) => {
  const [newComment, setNewComment] = useState("");
  const socket = useSocket();

  const addComment = async () => {
    if (newComment.trim() === "") return;

    try {
      const userIdString = localStorage.getItem("userId");
      const userId = userIdString ? JSON.parse(userIdString) : null;
      const objectIdUserId = mongoose.Types.ObjectId(userId);
      const res = await axios.post(
        `http://localhost:3000/api/comments/${profileId}`,
        {
          userId: objectIdUserId,
          comment: newComment,
        }
      );

      if (socket) {
        socket.emit("new_comment", {
          profileId,
          userId: objectIdUserId,
          comment: newComment,
        });
      }

      onCommentAdded(res.data);

      setNewComment("");
      onClose();
    } catch {
      console.log("Error adding comment:");
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="comment-modal-title"
      aria-describedby="comment-modal-description"
    >
      <div
        style={{
          padding: 20,
          backgroundColor: "white",
          margin: "auto",
          marginTop: "10%",
        }}
      >
        <Typography id="comment-modal-title" variant="h6">
          Add a Comment
        </Typography>
        <TextField
          label="Comment"
          fullWidth
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
        />
        <Button
          onClick={addComment}
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Post Comment
        </Button>
      </div>
    </Modal>
  );
};

export default CommentModal;
