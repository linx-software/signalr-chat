# SignalR chat demo using the Linx SignalRService service

## Description

This sample demonstrates how to use the Linx SignalRService service in a simple web-based chat application. It is based on the [ASP.NET Core SignalR tutorial](https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-5.0&tabs=visual-studio), but uses the Linx SignalRService service for handling the server-side (SignalR) functionality. 

## Usage

1. Open the `SignalR.lsoz` solution in the Linx designer.
2. The sample will listen for SignalR connections on port `8080` and REST connections on port `8081`. If you want to change these values, you can do so on the `Settings` screen. Note that if you change these values, you will also have to update the `ui/js/chat.js` file for the sample to work correctly.
3. Navigate to the `SignalRService` in the solution and select the `Debug` option.
4. After the debugging has completed, select the `Start` option to start the service.
5. Open 2 instances of the `ui/index.html` file in your browser. You can use the same browser (different tabs) or open up 2 instances using different browsers. It is important for the service to be running (see step 4) when you perform this step, as the sample does not contain any reconnection logic on the client side.
6. In your browser, enter values in the `User` and `Message` fields and click on either the `Send SignalR Message` or `Send REST Message` buttons. The message will appear in both instances of the opened page.
7. For additional configuration options on the service, please refer to the [Linx documentation](https://linx.software/docs/reference/plugins/signalr/content/signalrservice/).

## Contributing

For questions please ask the [Linx community](https://linx/software/community). 

## License

[MIT](https://github.com/linx-software/signalr-chat/blob/main/LICENSE)