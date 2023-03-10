import React, { useState } from "react";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    console.log(selectedFile);
    // Here you can make a POST request to upload the file using formData
    
  };

  return (
    <div className="fileUploadWrapper">
      <div className="childWrapper">
        <input
          type="file"
          id="file"
          class="inputfile"
          onChange={handleFileInput}
        />
        <label for="file">
          <span id="file-name" class="file-box">
            {selectedFile ? selectedFile.name : "Click here to select a file..."}
          </span>
          <span class="file-button">
            <i class="fa fa-upload" aria-hidden="true"></i>
            Select File
          </span>
        </label>
      </div>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
