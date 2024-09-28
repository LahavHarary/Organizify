import React, { useEffect, useState } from 'react';
import { getDocumentationListData, DocumentationShortResponse } from '../../src/api/apiService';
import { useNavigate } from 'react-router-dom';


const DocumentationList = () => {
    const [docListResponse, setDocListResponse] = useState<DocumentationShortResponse[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDocumentationList = async () => {
          try {
            const result = await getDocumentationListData();
            setDocListResponse(result);
          } catch (error) {
            setError((error as Error).message);
          }
        };
    
        fetchDocumentationList(); 
      }, []);

      const handleGetSingleDocumentationData = async (id: string) => {
        try {
          navigate(`/document/${id}`);
        } catch (error) {
          setError((error as Error).message);
        }
      };

    return (
        <>
            <div className={"flex-container"}>
                <h1 className={"doc-data"}>Documentation List</h1>
                <div className="post-request">
                    {docListResponse && (
                        <div className="response-list">
                            {docListResponse.map((item: DocumentationShortResponse) =>
                                <div className="response-item" key={item.id}>
                                <h3>{item.title}</h3>
                                <p>Posted by: {item.user_name}</p>
                                <br></br>
                                <button 
                                    className='send-post-request-btn small' 
                                    onClick={() => handleGetSingleDocumentationData(item.id)}>
                                    Click here
                                </button>
                            </div>
                            )}
                    </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DocumentationList;