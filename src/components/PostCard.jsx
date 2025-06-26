import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  const [loading, setLoading] = useState(true);
  const imageUrl = appwriteService.getFileUrl(featuredImage);

  return (
    <Link to={`/post/${$id}`} className="block w-full max-w-md mx-auto mb-6">
      <div className="rounded-xl overflow-hidden shadow-lg bg-white relative">
        <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
              {/* Spinner */}
              <div className="spinner"></div>
            </div>
          )}

          <img
            src={imageUrl}
            alt={title}
            onLoad={() => setLoading(false)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
