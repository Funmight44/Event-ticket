const AvatarUploader = () => {
    return ( 
        <>
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {preview ? (
            <img src={preview} alt="Preview" className="preview-image" />
            ) : (
            <p>Drag & drop an image here, or click to select</p>
            )}
            {uploading && <p>Uploading...</p>}
      </div>

       <div className="imageDiv">
            <label className="uploadLabel">Upload profile picture</label>
            <div className="upload">
            <input type="file" placeholder='<i class="bi bi-cloud-download"></i> Drag & drop or click to upload'
            required onChange={uploadImage}className="imgInput"/>
            {preview ? (
            <img src={preview} alt="Preview" className="preview-image" />
            ) : (
            <p>Drag & drop an image here, or click to select</p>
            )} 
            {errors.avatar && <p>{errors.avatar.message}</p>}
           </div>
        </div>
      </>
      
     );
}
 
export default AvatarUploader;