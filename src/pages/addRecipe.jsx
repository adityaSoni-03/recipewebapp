import { Tornado } from "lucide-react";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
function AddRecipe() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    desc: "",
    ingredients: "",
    instruction: "",
    cook_time: 0,
    is_public: false,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("access");
      console.log(token)
      const response = await fetch("http://127.0.0.1:8000/api/recipes/add/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Recipe added successfully 🎉");
        setFormData({
          title: "",
          image: "",
          desc: "",
          ingredients: "",
          instruction: "",
          cook_time: 0,
          is_public: false,
        });
      } else {
        const errorData = await response.json();
        console.log(errorData);
        toast.error("Error while adding the recipe!!")
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error!")
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      ></ToastContainer>
      <h2 className="mb-4">Add New Recipe</h2>

      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          className="form-control mb-3"
          value={formData.title}
          onChange={handleChange}
          required
        />

        {/* Image URL */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="form-control mb-3"
          value={formData.image}
          onChange={handleChange}
          required
        />

        {/* Description */}
        <textarea
          name="desc"
          placeholder="Short Description"
          className="form-control mb-3"
          value={formData.desc}
          onChange={handleChange}
          required
        />

        {/* Ingredients */}
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          className="form-control mb-3"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />

        {/* Instruction */}
        <textarea
          name="instruction"
          placeholder="Instructions"
          className="form-control mb-3"
          value={formData.instruction}
          onChange={handleChange}
          required
        />

        {/* Cook Time */}
        <input
          type="number"
          name="cook_time"
          placeholder="Cook Time (minutes)"
          className="form-control mb-3"
          value={formData.cook_time}
          onChange={handleChange}
        />

        {/* Is Public */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="is_public"
            className="form-check-input"
            checked={formData.is_public}
            onChange={handleChange}
          />
          <label className="form-check-label">
            Make this recipe public
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Recipe"}
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
