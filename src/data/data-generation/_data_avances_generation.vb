Private Sub CommandButton1_Click()
    Dim fs As Object
    Dim outFile As Object
    Dim PathFile As String
    Dim Hoja1 As Worksheet
    Dim Tabla As ListObject
    Dim Pregunta As Byte
    Dim strLinea As String
    Dim strSubTipoLine As String
    
    ' Utilizar la función CreateObject para crear una instancia de FileSystemObject
    Set fs = CreateObject("Scripting.FileSystemObject")
    '-------------------------------------------------------
    '  GENERA DATOS PARA INGRESAR ARCHIVO DE PAGOS y TRANSFERENCIAS
    '--------------------------------------------------------
    ' Validar Datos
    Set Hoja1 = ThisWorkbook.Sheets("Transferencias")
    PathFile = Hoja1.Range("C1").Value
    
    
    Pregunta = MsgBox("Desea generar el archivo?", vbYesNo + vbQuestion)
    If Pregunta = vbNo Then Exit Sub
    
    Dim fnAvances As Object
    Set fnAvances = fs.CreateTextFile(PathFile, True, True) ' Crear el archivo con Unicode (UTF-8) encoding
    
    For i = 4 To 100
        strTipo = Hoja1.Range("A" & i).Value
        strSubTipo = Hoja1.Range("B" & i).Value
        strTipoBeneficiario = Hoja1.Range("C" & i).Value
        strCuentaBeneficiario = Hoja1.Range("D" & i).Value
        strInstitucionBancaria = Hoja1.Range("E" & i).Value
        strNumeroTarjeta = Hoja1.Range("F" & i).Value
        strTipoDocumento = Hoja1.Range("G" & i).Value
        strTipoCuenta = Hoja1.Range("H" & i).Value
        strNumeroIdentificacion = Hoja1.Range("I" & i).Value
        strFormaPago = Hoja1.Range("J" & i).Value
        strMesesPlazo = Hoja1.Range("K" & i).Value
        
        
        If (strTipo <> "") Then
            strLinea = "{""case"":""" & i & """, ""status"": ""pending"", ""msg"": """", ""orderStatus"":"""""
            Select Case strTipo
                    Case "Avances"
                        strLinea = strLinea & ",""type"":""Avances"""

                        Select Case strSubTipo
                            Case "Efectivo"
                                strSubTipoLine = "Efectivo"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"
                                
                                Select Case strTipoBeneficiario
                                    Case "Mis Cuentas"
                                        strLinea = strLinea & " ,""tipo_beneficiario"": """ & strTipoBeneficiario & """"
                                        
                                        If (strCuentaBeneficiario <> "") Then
                                        strLinea = strLinea & " ,""numero_cuenta_beneficiario"": """ & strCuentaBeneficiario & """"
                                        Else
                                            MsgBox "Campo -Cuenta Beneficiaria- se encuentra vacio."
                                            Exit Sub
                                        End If
                                        
                                        If (strNumeroTarjeta <> "") Then
                                        strLinea = strLinea & " ,""numero_tarjeta"": """ & strNumeroTarjeta & """"
                                        Else
                                            MsgBox "Campo -Numero de Tarjeta- se encuentra vacio."
                                        End If
                                        
                                        If (strFormaPago <> "") Then
                                        strLinea = strLinea & " ,""forma_pago"": """ & strFormaPago & """"
                                        Else
                                            MsgBox "Campo -Forma de Pago- se encuentra vacio."
                                        End If
                                        
                                        If (strMesesPlazo <> "") Then
                                            strLinea = strLinea & " ,""meses_plazo"": """ & strMesesPlazo & """"
                                        End If
                                        
                                    Case "Registrado"
                                        strLinea = strLinea & " ,""tipo_beneficiario"": """ & strTipoBeneficiario & """"
                                        
                                        If (strCuentaBeneficiario <> "") Then
                                        strLinea = strLinea & " ,""numero_cuenta_beneficiario"": """ & strCuentaBeneficiario & """"
                                        Else
                                            MsgBox "Campo -Cuenta Beneficiaria- se encuentra vacio."
                                            Exit Sub
                                        End If
                                        
                                        If (strNumeroTarjeta <> "") Then
                                        strLinea = strLinea & " ,""numero_tarjeta"": """ & strNumeroTarjeta & """"
                                        Else
                                            MsgBox "Campo -Numero de Tarjeta- se encuentra vacio."
                                        End If
                                        
                                        If (strFormaPago <> "") Then
                                        strLinea = strLinea & " ,""forma_pago"": """ & strFormaPago & """"
                                        Else
                                            MsgBox "Campo -Forma de Pago- se encuentra vacio."
                                        End If
                                        
                                        If (strMesesPlazo <> "") Then
                                            strLinea = strLinea & " ,""meses_plazo"": """ & strMesesPlazo & """"
                                        End If
                                        
                                    Case "Eventual"
                                        strLinea = strLinea & " ,""tipo_beneficiario"": """ & strTipoBeneficiario & """"
                                        
                                        If (strCuentaBeneficiario <> "") Then
                                        strLinea = strLinea & " ,""numero_cuenta_beneficiario"": """ & strCuentaBeneficiario & """"
                                        Else
                                            MsgBox "Campo -Cuenta Beneficiaria- se encuentra vacio."
                                            Exit Sub
                                        End If
                                        
                                        If (strNumeroTarjeta <> "") Then
                                        strLinea = strLinea & " ,""numero_tarjeta"": """ & strNumeroTarjeta & """"
                                        Else
                                            MsgBox "Campo -Numero de Tarjeta- se encuentra vacio."
                                        End If
                                    
                                        If (strFormaPago <> "") Then
                                        strLinea = strLinea & " ,""forma_pago"": """ & strFormaPago & """"
                                        Else
                                            MsgBox "Campo -Forma de Pago- se encuentra vacio."
                                        End If
                                        
                                        If (strMesesPlazo <> "") Then
                                            strLinea = strLinea & " ,""meses_plazo"": """ & strMesesPlazo & """"
                                        End If
                                        
                                        If (strInstitucionBancaria <> "") Then
                                            strLinea = strLinea & " ,""institucion_bancaria"": """ & strInstitucionBancaria & """"
                                        Else
                                            MsgBox "Campo -Institucion Bancaria- se encuentra vacio."
                                        End If
                                    
                                        If (strTipoDocumento <> "") Then
                                            strLinea = strLinea & " ,""tipo_documento"": """ & strTipoDocumento & """"
                                        Else
                                            MsgBox "Campo -Tipo de Documento- se encuentra vacio."
                                        End If
                                        
                                        If (strTipoCuenta <> "") Then
                                            strLinea = strLinea & " ,""tipo_cuenta"": """ & strTipoCuenta & """"
                                        Else
                                            MsgBox "Campo -Tipo de Cuenta- se encuentra vacio."
                                        End If
                                        
                                        If (strNumeroIdentificacion <> "") Then
                                            strLinea = strLinea & " ,""numero_identificacion"": """ & strNumeroIdentificacion & """"
                                        Else
                                            MsgBox "Campo -Numero de Identificacion- se encuentra vacio."
                                        End If
                                End Select
                        End Select
            End Select
            fnAvances.Write strLinea & "}" & vbCrLf
        End If
    Next
    MsgBox "Se ha creado el archivo en la ruta: " & PathFile
End Sub



