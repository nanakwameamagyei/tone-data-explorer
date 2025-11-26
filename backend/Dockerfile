# Build stage
FROM golang:1.21-alpine AS builder
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Build for Linux
RUN GOOS=linux GOARCH=amd64 go build -o main .

# Final image
FROM alpine:latest
WORKDIR /app

COPY --from=builder /app/main .
COPY --from=builder /app/data ./data

EXPOSE 8080
CMD ["./main"]
