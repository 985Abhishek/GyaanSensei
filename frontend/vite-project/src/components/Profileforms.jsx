import React, { useState } from 'react';
//import './Profileforms.css';

const Profileforms = () => {
    const [formData, setFormData] = useState({
        name: '',
        profilePic: '',
        gender: '',
        skills: [{ skill: '', proficiency: 0, description: '', timeAvailable: '', charges: '' }],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSkillChange = (index, e) => {
        const { name, value } = e.target;
        const skills = [...formData.skills];
        skills[index][name] = value;
        setFormData({ ...formData, skills });
    };

    const addSkill = () => {
        setFormData({
            ...formData,
            skills: [...formData.skills, { skill: '', proficiency: 0, description: '', timeAvailable: '', charges: '' }],
        });
    };

    const handleStarClick = (index, star) => {
        const skills = [...formData.skills];
        skills[index].proficiency = star;
        setFormData({ ...formData, skills });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form className="profile-form" onSubmit={handleSubmit}>
            <h2>Create Your Profile</h2>

            <div className="form-group profile-pic">
                <label>Profile Pic:</label>
                <input type="file" accept="image/*" onChange={(e) => setFormData({ ...formData, profilePic: e.target.files[0] })} />
                {formData.profilePic && (
                    <img src={URL.createObjectURL(formData.profilePic)} alt="Profile Preview" className="profile-pic-preview" />
                )}
            </div>
            
            <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

         

            <div className="form-group">
                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {formData.skills.map((skill, index) => (
                <div key={index} className="skill-group">
                    <h3>Skill {index + 1}</h3>
                    <div className="form-group">
                        <label>Skill:</label>
                        <input type="text" name="skill" value={skill.skill} onChange={(e) => handleSkillChange(index, e)} required />
                    </div>

                    <div className="form-group">
                        <label>Proficiency:</label>
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`star ${skill.proficiency >= star ? 'filled' : ''}`}
                                    onClick={() => handleStarClick(index, star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Skill Description (optional):</label>
                        <textarea name="description" value={skill.description} onChange={(e) => handleSkillChange(index, e)} />
                    </div>

                    <div className="form-group">
                        <label>Time Available to Teach:</label>
                        <input type="text" name="timeAvailable" value={skill.timeAvailable} onChange={(e) => handleSkillChange(index, e)} required />
                    </div>

                    <div className="form-group">
                        <label>Charges to Teach:</label>
                        <input type="number" name="charges" value={skill.charges} onChange={(e) => handleSkillChange(index, e)} required />
                    </div>
                </div>
            ))}

            <button type="button" onClick={addSkill}>Add Another Skill</button>

            <button type="submit">Submit Profile</button>
        </form>
    );
};

export default Profileforms;