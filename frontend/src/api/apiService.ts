  
  export interface DocumentationShortResponse {
    id: string,
    title: string,
    user_name: string,
  }

  export interface DocumentationLongResponse {
    id: string,
    title: string,
    user_name: string,
    description: string,
  }
  
  export const getDocumentationListData = async (): Promise<DocumentationShortResponse[]> => {
    const response = await fetch('http://localhost:3001/api/documentations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to send data to backend');
    }
    
    const data = await response.json();

    let filteredDataList: DocumentationShortResponse[] = [];
    data.forEach((element: any) => {
        filteredDataList.push({
          id: element._id,
          title: element.title,
          user_name: element.user_name,
        });
    });

    return filteredDataList;
  };

  export const getSingleDocumentationResponse = async (id: string): Promise<DocumentationLongResponse> => {
    const response = await fetch(`http://localhost:3001/api/documentation/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    const documentationLongResponse : DocumentationLongResponse = {
      id: data._id,  
      title: data.title,
      user_name: data.user_name,
      description: data.description
    };
    
    return documentationLongResponse;
  }


  