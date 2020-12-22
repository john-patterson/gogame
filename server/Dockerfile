FROM golang:1.15

WORKDIR /go/app
COPY . /go/app
RUN GO111MODULE=on go build -o /go/app/main /go/app/main.go

CMD ["/go/app/main"]