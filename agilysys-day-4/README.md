# Day 4: Backend Development with Python

Welcome to Day 4! Today we shift focus to backend development using Python, learning to build robust APIs and server-side applications with GitHub Copilot's assistance.

## 🎯 Day Overview

Backend development is essential for modern web applications. Today you'll learn to create RESTful APIs, handle data processing, and build the server-side logic that powers dynamic web applications, all while leveraging AI-assisted development.

## 📚 Topics Covered

### Morning Session (2 hours)
- **Python Backend Fundamentals**
  - Flask/FastAPI framework introduction
  - RESTful API design principles
  - HTTP methods and status codes
  - Request/response handling

- **API Development with Copilot**
  - Using Copilot for Python code generation
  - Prompt engineering for backend development
  - Error handling and validation
  - API documentation practices

### Afternoon Session (2 hours)
- **Advanced Backend Features**
  - Database integration concepts
  - User authentication basics
  - File handling and uploads
  - Background task processing

- **Chatbot Development**
  - Building conversational interfaces
  - Natural language processing basics
  - Integrating AI services
  - Real-time communication

## 🚀 Projects

### Project 1: Python API Server
**Location**: `./api.py`

Build a comprehensive RESTful API using Python with modern framework practices.

**Objectives**:
- Create CRUD endpoints
- Implement proper error handling
- Add input validation
- Use Copilot for rapid API development

### Project 2: AI Chatbot
**Location**: `./chatbot.py`

Develop an intelligent chatbot with natural language capabilities.

**Objectives**:
- Process natural language input
- Generate intelligent responses
- Implement conversation memory
- Deploy chatbot interface

### Project 3: POML-Enhanced Development
**Location**: `./prompt.poml`

Use POML for advanced backend development automation.

**Objectives**:
- Automate API endpoint generation
- Generate test data and scenarios
- Create documentation automatically
- Streamline development workflow

## 🛠️ Setup Instructions

### Prerequisites
- Python 3.8+ installed
- Basic Python programming knowledge
- Completed Days 1-3
- GitHub Copilot active

### Environment Setup
```bash
# Navigate to day 4 folder
cd agilysys-day-4

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Linux/Mac:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the API server
python api.py
```

### Required Python Packages
```txt
flask>=2.3.0
fastapi>=0.100.0
uvicorn>=0.20.0
requests>=2.30.0
python-dotenv>=1.0.0
pydantic>=2.0.0
```

## 📋 Learning Checklist

By the end of Day 4, you should be able to:

- [ ] Set up a Python backend development environment
- [ ] Create RESTful API endpoints using Flask/FastAPI
- [ ] Handle HTTP requests and responses properly
- [ ] Implement data validation and error handling
- [ ] Use GitHub Copilot for Python development
- [ ] Build a functional chatbot application
- [ ] Integrate third-party APIs and services
- [ ] Understand backend security basics
- [ ] Deploy and test API endpoints

## 🎓 Expected Outcomes

After completing Day 4, you will have:

1. **Backend Proficiency**: Solid foundation in Python web development
2. **API Design Skills**: Understanding of RESTful principles
3. **AI Integration**: Experience building intelligent applications
4. **Development Workflow**: Efficient backend development practices
5. **Working Applications**: Multiple functional backend services

## 🌐 API Development Patterns

### RESTful Endpoint Structure
```python
# Example API structure with Copilot assistance
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/users', methods=['GET'])
def get_users():
    # Implementation here
    pass

@app.route('/api/users', methods=['POST'])
def create_user():
    # Implementation here
    pass

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    # Implementation here
    pass
```

### Error Handling Best Practices
```python
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Resource not found'}), 404

@app.errorhandler(400)
def bad_request(error):
    return jsonify({'error': 'Bad request'}), 400
```

## 📁 Project Structure

```
agilysys-day-4/
├── README.md (this file)
├── api.py (main API server)
├── chatbot.py (chatbot application)
├── prompt.poml (POML automation)
├── requirements.txt (Python dependencies)
├── notes.txt (development notes)
├── tests/
│   ├── test_api.py
│   └── test_chatbot.py
├── models/
│   └── data_models.py
└── utils/
    ├── helpers.py
    └── validators.py
```

## 🔄 What's Next - Day 5 Preview

Tomorrow we'll integrate frontend and backend:
- **Full-stack application development**
- **Frontend-backend communication**
- **State management**
- **Real-time features**

## 💡 Backend Development Tips

1. **Use Type Hints**: Help Copilot understand your code better
2. **Write Docstrings**: Document your functions for better AI assistance
3. **Modular Design**: Break code into reusable components
4. **Error First**: Always handle errors gracefully
5. **Test Early**: Write tests alongside your API development

## 🛠️ Essential Commands

```bash
# Run Flask development server
flask run

# Run FastAPI with uvicorn
uvicorn api:app --reload

# Install package and update requirements
pip install package_name
pip freeze > requirements.txt

# Run tests
python -m pytest tests/

# Check code style
flake8 *.py

# Format code
black *.py
```

## 🔧 Development Tools

### API Testing
- **Postman**: GUI-based API testing
- **curl**: Command-line HTTP client
- **HTTPie**: User-friendly HTTP client
- **Insomnia**: Alternative to Postman

### Code Quality
- **Black**: Code formatting
- **Flake8**: Linting and style checking
- **mypy**: Static type checking
- **pytest**: Testing framework

## 📚 Additional Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Python Best Practices](https://docs.python-guide.org/)
- [RESTful API Design](https://restfulapi.net/)
- [API Security Best Practices](https://owasp.org/API-Security/)

## 🚨 Common Backend Pitfalls

- **Hardcoded Values**: Use environment variables for configuration
- **Poor Error Messages**: Provide meaningful error responses
- **Security Oversights**: Validate all inputs and sanitize data
- **Performance Issues**: Consider caching and optimization early
- **Documentation Gaps**: Keep API documentation up to date

## 🔒 Security Considerations

- **Input Validation**: Never trust user input
- **Authentication**: Implement proper user verification
- **Authorization**: Control access to resources
- **HTTPS**: Always use secure connections in production
- **Rate Limiting**: Prevent abuse and DoS attacks

---

**Ready to power the web?** Start building robust backend services and discover the power of server-side development!
