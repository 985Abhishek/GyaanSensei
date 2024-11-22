import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import {
  TextField,
  Avatar,
  Grid2,
  Select,
  MenuItem,
  Chip,
  Rating,
  Button,
  Input,
  InputLabel,
  Box,
  FormControl,
  Typography,
} from "@mui/material";
import { useDropzone } from "react-dropzone";

const SampleProfileForm = () => {
  const { control, handleSubmit, setValue, reset } = useForm();
  const [skills, setSkills] = useState([]);
  const [media, setMedia] = useState([]);
  const [profilePic, setProfilePic] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = async (data) => {
    console.log("FormData", data);

    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("age", data.age);
    formData.append("gender", data.gender);
    formData.append("skills", data.skills);
    formData.append("skillDescription", data.skillDescription);
    formData.append("rating", data.rating);

    if (selectedAvatar) {
      formData.append("avatar", selectedAvatar);
    }
    media.forEach((file) => formData.append("media", file));

    try {
      const response = await axios.post(
        "http://localhost:3000/api/profile/create-profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form Submitted successfully:", response.data);

      const avatarUrl = response.data.profile.avatar;
      setProfilePic(avatarUrl);

      setFormData({
        avatar: avatarUrl,
        username: data.username,
        age: data.age,
        gender: data.gender,
        skills,
        skillDescription: data.skillDescription,
        rating: data.rating,
        media,
      });
      reset();
      setProfilePic([]);
      setSkills([]);
      setMedia([]);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const addSkill = (skill) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: ["image/*", "video/*", "audio/*"],
    onDrop: (acceptedFiles) => setMedia([...media, ...acceptedFiles]),
  });

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedAvatar(file);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid2
          container
          spacing={2}
          sx={{ padding: "20px", maxWidth: "700px" }}
          border={"5px solid black"}
          borderRadius={"20px"}
          margin={"20px"}
        >
          <Grid2 size={12}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "blueviolet" }}
              justifyContent={"center"}
            >
              Welcome To Profile Page
            </Typography>
          </Grid2>
          <Grid2 size={12} justifyContent="center">
            <Controller
              name="avatar"
              control={control}
              render={({ field }) => (
                <Avatar
                  {...field}
                  src={profilePic}
                  sx={{ width: 120, height: 120, borderRadius: "50%" }}
                />
              )}
            />
            <Input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              style={{
                marginTop: "10px",
                display: "block",
                cursor: "pointer",
                width: "120px",
              }}
            />
          </Grid2>
          <Grid2 size={12}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Username" fullWidth />
              )}
            />
          </Grid2>

          <Grid2 size={12}>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Age" type="number" fullWidth />
              )}
            />
          </Grid2>

          <Grid2 size={12}>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>

                  <Select
                    label="Gender"
                    {...field}
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid2>

          <Grid2 size={12}>
            <Controller
              name="skills"
              control={control}
              render={({ ...field }) => (
                <div>
                  <TextField
                    label="Add Skill"
                    value={field.value}
                    onChange={(e) => setValue("skills", e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        addSkill(e.target.value);
                        setValue("skills", "");
                      }
                    }}
                    fullWidth
                  />
                  <div style={{ marginTop: "10px" }}>
                    {skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        onDelete={() => removeSkill(skill)}
                        style={{ marginRight: 5, marginTop: 5 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            />
          </Grid2>

          <Grid2 size={12}>
            <Controller
              name="skillDescription"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Skills Description (Optional)"
                  fullWidth
                />
              )}
            />
          </Grid2>

          <Grid2 size={12}>
            {/* Rating */}
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <Box sx={{  alignItems: "center" }}>
                  <label>Rating</label>
                  <Rating
                    {...field}
                    name="rating"
                    precision={1.5}
                    size="large"
                  />
                </Box>
              )}
            />
          </Grid2>

          <Grid2 size={12}>
            <div
              {...getRootProps({ className: "dropzone" })}
              style={{
                border: "2px dashed #ccc",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <input {...getInputProps()} />
              <p>Drag & drop some media here, or click to select files</p>
            </div>
            <div style={{ marginTop: "10px" }}>
              {media.length > 0 && (
                <div>
                  {media.map((file, index) => (
                    <div key={index}>
                      <p>{file.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Grid2>

          <Grid2 size={12} display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </div>
  );
};

export default SampleProfileForm;
