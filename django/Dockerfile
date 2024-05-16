FROM python:3.10

WORKDIR /usr/src/app

# переменные окружения для python
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

VOLUME /usr/local/lib/python3.10/site-packages

# устанавливаем зависимости
COPY ./requirements.txt .
RUN pip install --upgrade pip && \
    pip install -r requirements.txt --use-feature=fast-deps

# копируем остальной код
COPY . .

EXPOSE 8000