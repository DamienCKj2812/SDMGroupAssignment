import React, { useRef, useState } from "react";
import { Avatar, Flex, Grid, Heading, Tooltip } from "@radix-ui/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import defaultImage from "/src/_common/assets/contractimage.jpg"; // Import default image

const ContractDetails = () => {
  const fileInputRef = useRef(null);
  const [uploadedImages, setUploadedImages] = useState([defaultImage]); // Initialize with the default image

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Create a temporary URL for the file
      setUploadedImages((prevImages) => [...prevImages, fileURL]); // Store the image in state
      event.target.value = ""; // Reset the file input for subsequent uploads
    }
  };

  const handleRemoveImage = (index) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <Flex id="addcontract" justify="center">
      <Flex width="1200px" direction="column" gap="3">
        <Heading as="h1" m="0">
          Add Sign Contract Document
        </Heading>
        <Grid columns="4" gap="9">
          {/* Display uploaded images */}
          {uploadedImages.map((image, index) => (
            <Flex
              key={index}
              className="contract-avatar"
              justify="center"
              align="center"
              position="relative"
            >
              <Flex
                position="absolute"
                align="center"
                gap="4"
                className="contract-tool-box"
                justify="center"
              >
                {/* View Button */}
                <Tooltip content="View Contract">
                  <FontAwesomeIcon icon={faEye} onClick={() => window.open(image, "_blank")} />
                </Tooltip>

                {/* Edit Button */}
                <Tooltip content="Change Contract">
                  <FontAwesomeIcon
                    icon={faPen}
                    onClick={() => fileInputRef.current?.click()}
                  />
                </Tooltip>

                {/* Remove Button */}
                <Tooltip content="Remove Contract">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="trash"
                    onClick={() => handleRemoveImage(index)}
                  />
                </Tooltip>
              </Flex>

              {/* Display the uploaded or default image */}
              <Avatar
                src={image}
                className="contract-avatar"
                style={{ width: "100%", height: "100%" }}
              />
            </Flex>
          ))}

          {/* Add New Contract Button */}
          <Flex
            className="contract-avatar add-new"
            justify="center"
            align="center"
            onClick={() => fileInputRef.current?.click()}
          >
            <FontAwesomeIcon icon={faPlus} style={{ height: "40px", width: "40px" }} />
          </Flex>

          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </Grid>
      </Flex>
    </Flex>
  );
};

export default ContractDetails;






