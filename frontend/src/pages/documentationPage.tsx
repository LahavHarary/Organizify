import React, { useEffect, useState } from 'react';
import { getSingleDocumentationResponse, DocumentationLongResponse } from '../../src/api/apiService';
import { useParams } from 'react-router-dom';

const DocumentationPage = () => {
    const { id } = useParams<{ id: string }>();
    const [singleDocResponse, setSingleDocResponse] = useState<DocumentationLongResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSingleDocumentationData = async () => {
          try {
            if (id) {
              const result = await getSingleDocumentationResponse(id); // Fetch document data using the id
              setSingleDocResponse(result);
            }
          } catch (error) {
            setError((error as Error).message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchSingleDocumentationData(); // Fetch the document when the component mounts
      }, [id]); // Run this effect when id changes
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!singleDocResponse) {
        return <div>No document found.</div>;
      }

    return (
        <>
        <div>
              <h1 className='single-response-title'>title: {singleDocResponse.title}</h1>
              <div className='single-response-data'>user_name: {singleDocResponse.user_name}</div>
              <div className='single-response-data'>description: {singleDocResponse.description}</div>
        </div>
        </>
    )
};

export default DocumentationPage;