import React, { useState } from "react";
import "./ProfileForm.css";

const ProfileForm = ({ type = "teacher" }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([
    { skill: "", proficiency: 0, description: "" },
  ]);
  const [timeAvailable, setTimeAvailable] = useState("");
  const [charges, setCharges] = useState("");

  const handleAddSkill = () => {
    setSkills([...skills, { skill: "", proficiency: 0, description: "" }]);
  };

  const handleDeleteSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleSkillChange = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

  return (
    <div
      className={`profile-form ${
        type === "teacher" ? "teacher-form" : "learner-form"
      }`}
    >
      <div className="form-container">
        <div className="form-header">
          <h2>{type === "teacher" ? "Teacher Profile" : "Learner Profile"}</h2>
        </div>

        <div className="input-group">
          <label>Profile Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setProfilePic(URL.createObjectURL(e.target.files[0]))
            }
          />
          {profilePic && (
            <img src={profilePic} alt="Profile" className="profile-pic" />
          )}
        </div>

        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="input-group">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {type === "teacher" && (
          <>
            <div className="input-group">
              <label>Charges to Teach (INR):</label>
              <input
                type="number"
                value={charges}
                onChange={(e) => setCharges(e.target.value)}
                placeholder="Enter charges in INR"
              />
            </div>

            <div className="input-group">
              <label>Time Available to Teach:</label>
              <input
                type="text"
                value={timeAvailable}
                onChange={(e) => setTimeAvailable(e.target.value)}
                placeholder="e.g. 3 hours/day"
              />
            </div>
          </>
        )}

        <div className="skills-section">
          <label>Skills:</label>
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <input
                type="text"
                value={skill.skill}
                onChange={(e) =>
                  handleSkillChange(index, "skill", e.target.value)
                }
                placeholder="Enter Skill"
              />
              <input
                type="number"
                min="1"
                max="5"
                value={skill.proficiency}
                onChange={(e) =>
                  handleSkillChange(index, "proficiency", e.target.value)
                }
                placeholder="Proficiency (1-5)"
              />
              <textarea
                value={skill.description}
                onChange={(e) =>
                  handleSkillChange(index, "description", e.target.value)
                }
                placeholder="Skill Description (optional)"
              />
              <button
                type="button"
                onClick={() => handleDeleteSkill(index)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddSkill} className="add-btn">
            Add Another Skill
          </button>
        </div>

        <button type="submit" className="submit-btn">
          {type === "teacher"
            ? "Submit Teacher Profile"
            : "Submit Learner Profile"}
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
