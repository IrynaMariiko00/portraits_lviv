import { useState } from "react";
import type { FormField } from "~/types/formField";
import UploadFileIcon from "~/assets/icons/UploadFileIcon";

const FileUploadField = ({ label }: FormField) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleDelete = (indexToDelete: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedFiles((files) =>
      files.filter((__, index) => index !== indexToDelete),
    );
  };

  return (
    <div className="md:col-span-2 mt-4">
      <label className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray mb-4 block">
        {label.text}
      </label>
      <div className="group relative w-full h-32 border border-dashed border-[var(--color-border)] rounded-2xl flex flex-col items-start p-6 justify-center hover:bg-white/[0.02] transition-all cursor-pointer">
        <input
          type="file"
          id="file-upload"
          className="sr-only"
          multiple
          onChange={(e) => {
            if (e.target.files) {
              const newFiles = Array.from(e.target.files);
              setSelectedFiles((prev) => [...prev, ...newFiles]);
            }
          }}
        />

        {selectedFiles.length === 0 ? (
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-32 cursor-pointer group"
          >
            <UploadFileIcon />
            <p className="small-text text-[var(--color-border-dark)]">
              Upload your photos (PNG, JPG)
            </p>
          </label>
        ) : (
          <div className="flex gap-6">
            {selectedFiles.map((file, index) => (
              <div key={index} className="relative group/item w-24 h-24">
                <div className="w-full h-full rounded-lg overflow-hidden border border-[var(--color-border)]">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={(e) => handleDelete(index, e)}
                  type="button"
                  className="absolute pb-1 top-[-10px] right-[-10px] bg-[var(--color-border-dark)] text-[var(--primary-color)] w-6 h-6 rounded-full flex items-center justify-center transition-all opacity-0 group-hover/item:opacity-100"
                >
                  <span className="leading-none text-[1rem]">×</span>
                </button>
              </div>
            ))}
            {selectedFiles.length < 5 && (
              <label
                htmlFor="file-upload"
                className="w-24 h-24 border border-dashed border-[var(--color-border)] rounded-xl pb-2 flex flex-col items-center justify-center hover:bg-white/[0.05] hover:border-blue/50 transition-all cursor-pointer group"
              >
                <span className="text-[1.5rem] text-[var(--color-border-dark)] group-hover:text-blue">
                  +
                </span>
                <span className="text-[0.7rem] text-[var(--color-border-dark)] uppercase tracking-tighter">
                  Add more
                </span>
              </label>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadField;

/*

import { useState, ChangeEvent, MouseEvent } from "react";

const FileUploadField = ({ label }: any) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number, e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Важливо, щоб не відкрилося вікно вибору файлу
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="md:col-span-2 mt-4">
      <label className="text-[0.75rem] uppercase tracking-[0.2em] text text-gray mb-4 block pl-3">
        {label.text}
      </label>

      <div className="relative w-full min-h-[160px] border border-dashed border-white/10 rounded-2xl bg-white/[0.02] p-6 transition-all hover:border-blue/30">

        <input
          type="file"
          id="file-upload"
          className="sr-only"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />

        {selectedFiles.length === 0 ? (

          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-32 cursor-pointer group"
          >
            <svg
              className="w-8 h-8 text-white/10 group-hover:text-blue transition-colors mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p className="text-[12px] text-white/30 uppercase tracking-[0.1em]">
              Upload your photos (PNG, JPG)
            </p>
          </label>
        ) : (
          <div className="flex flex-wrap gap-4">
            {selectedFiles.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="relative w-24 h-24 rounded-xl overflow-hidden border border-white/10 group animate-in fade-in zoom-in duration-300"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-full h-full object-cover"
                />

                <button
                  onClick={(e) => removeFile(index, e)}
                  className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
                  type="button"
                >
                  <div className="bg-red-500 p-1.5 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            ))}

            <label
              htmlFor="file-upload"
              className="w-24 h-24 border border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center hover:bg-white/[0.05] hover:border-blue/50 transition-all cursor-pointer group"
            >
              <span className="text-[20px] text-white/20 group-hover:text-blue">
                +
              </span>
              <span className="text-[9px] text-white/30 uppercase tracking-tighter">
                Add more
              </span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadField;
*/
