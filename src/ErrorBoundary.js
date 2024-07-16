import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // Можно отрендерить запасной UI произвольного вида
        return(
          <div style={{display: "flex", width:"100vw", height: "100vh", alignItems: "center", justifyContent: "center"}}>
            <h1>Что-то пошло не так, пожалуйста перезагрузите страницу</h1> 
          </div>
        )
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;