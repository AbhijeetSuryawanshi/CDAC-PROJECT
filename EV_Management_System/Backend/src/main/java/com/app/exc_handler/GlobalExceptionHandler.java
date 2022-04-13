package com.app.exc_handler;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import com.app.dto.ErrorResponse;
//import com.app.custom_exception.ResourceNotFoundException;


@ControllerAdvice 
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		
		StringBuilder sb = new StringBuilder("Validation Error Message :");
		ex.getBindingResult().getFieldErrors().forEach(fieldErr -> sb.append(fieldErr.getDefaultMessage() + " "));
		System.out.println(sb);
		ErrorResponse resp = new ErrorResponse(sb.toString());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resp);
		

	}

	
//	@ExceptionHandler(ResourceNotFoundException.class)
//	public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException e) {
//		System.out.println("in handle res not found");
//		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse(e.getMessage()));
//
//	}

	
	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> handleRuntimeException(RuntimeException e) {
		System.out.println("in handle run time exc " + e);
		ErrorResponse resp = new ErrorResponse("Something went wrong : " + e.getMessage());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resp);
	}

}
