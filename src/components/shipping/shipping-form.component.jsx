import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { updateShippingAddress } from "../../features/user/userSlice";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase.utils";

const ShippingForm = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [localShippingAddress, setLocalShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setLocalShippingAddress({
      ...localShippingAddress,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const userDocRef = doc(firestore, "users", currentUser.uid);
      await updateDoc(userDocRef, {
        shippingAddress: { ...localShippingAddress },
      });
      dispatch(updateShippingAddress(localShippingAddress));
      alert("Shipping address updated successfully!");
    } catch (error) {
      console.error("Error updating shipping address:", error);
      setError("Failed to update shipping address. Please try again.");
    } finally {
      setLoading(false);

      setLocalShippingAddress({
        name: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      });
    }
  };

  const { name, address, city, state, postalCode, country } =
    localShippingAddress;

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        label="Name"
        required
      />
      <FormInput
        type="text"
        name="address"
        value={address}
        onChange={handleChange}
        label="Address"
        required
      />
      <FormInput
        type="text"
        name="city"
        value={city}
        onChange={handleChange}
        label="City"
        required
      />
      <FormInput
        type="text"
        name="state"
        value={state}
        onChange={handleChange}
        label="State"
        required
      />
      <FormInput
        type="text"
        name="postalCode"
        value={postalCode}
        onChange={handleChange}
        label="Postal Code"
        required
      />
      <FormInput
        type="text"
        name="country"
        value={country}
        onChange={handleChange}
        label="Country"
        required
      />
      <CustomButton type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save"}
      </CustomButton>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};
export default ShippingForm;
