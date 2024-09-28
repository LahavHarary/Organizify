import React, { useEffect, useState } from 'react';
import { getDocumentationListData, getSingleDocumentationResponse, DocumentationLongResponse, DocumentationShortResponse } from '../src/api/apiService';

const App: React.FC = () => {
  // Doc list
  const [isDocListClicked, setDocListIsClicked] = useState(false);
  const [docListResponse, setDocListResponse] = useState<DocumentationShortResponse[] | null>(null);

  // Single doc
  const [singleDocResponse, setSingleDocResponse] = useState<DocumentationLongResponse | null>(null);
  
  // errors
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleGetDocumentationListData = async () => {
      try {
        const result = await getDocumentationListData();
        setDocListResponse(result);
        setDocListIsClicked(true);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    handleGetDocumentationListData(); 
  }, []);

  const handleGetSingleDocumentationData = async (id: string) => {
    try {
      console.log("id is = ", id);
      const result = await getSingleDocumentationResponse(id);
      setSingleDocResponse(result);
      setDocListResponse([]);
      setDocListIsClicked(false);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <>
      <div className={`container ${isDocListClicked ? 'clicked' : ''}`}>
        <div className={"flex-container"}>
          <h1 className={`doc-data ${isDocListClicked ? 'clicked' : ''}`}>Documentation List</h1>
          <div className="post-request">
            {docListResponse && (
              <div className="response-list">
                {docListResponse.map((item: DocumentationShortResponse) =>
                  <div className="response-item" key={item.id}>
                    <h3>{item.title}</h3>
                    <p>Posted by: {item.user_name}</p>
                    <br></br>
                    {!singleDocResponse && ( 
                      <button 
                        className='send-post-request-btn small' 
                        onClick={() => handleGetSingleDocumentationData(item.id)}>
                        Click here
                      </button>
                    )}
                    </div>)}
              </div>)}
          </div>
          {singleDocResponse && (<div>
              <h1 className='single-response-title'>title: {singleDocResponse.title}</h1>
              <div className='single-response-data'>user_name: {singleDocResponse.user_name}</div>
              <div className='single-response-data'>description: {singleDocResponse.description}</div>
            </div>
            )}
        </div>
    </div>
    </>
  );
};

export default App;
