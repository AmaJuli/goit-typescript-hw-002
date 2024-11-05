import React, { useEffect, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageModal from './ImageModal/ImageModal';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import fetchImagesWithTopic, { Image } from './api'; 
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const fetchImages = async () => {
      if (query === '') return;

      try {
        setLoading(true);
        const data = await fetchImagesWithTopic(query, page);
        setImages((prevData) => [...prevData, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (topic: string) => {
    setImages([]);
    setError(false);
    setQuery(topic);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (url: string) => {
    setSelectedImageUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImageUrl}
      />
      {images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} loading={loading} />
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
