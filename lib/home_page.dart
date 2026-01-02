import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final String _message = "No message received yet, waiting...";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Dashboard"), actions: const []),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(10.0),
        child: Column(
          children: [
            const Text(
              'Welcome to the Home Page!',
              style: TextStyle(fontSize: 24),
            ),
            const SizedBox(height: 20),
            Text(_message, style: const TextStyle(fontSize: 20)),
          ],
        ),
      ),
    );
  }
}
