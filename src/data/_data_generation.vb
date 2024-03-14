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
    Set Hoja1 = ThisWorkbook.Sheets("Trans Banca Movil")
    PathFile = Hoja1.Range("C1").Value
    
    
    Pregunta = MsgBox("Desea generar el archivo?", vbYesNo + vbQuestion)
    If Pregunta = vbNo Then Exit Sub
    
    Dim fnTransferencias As Object
    Set fnTransferencias = fs.CreateTextFile(PathFile, True, True) ' Crear el archivo con Unicode (UTF-8) encoding
    
    For i = 4 To 100
        strTipo = Hoja1.Range("A" & i).Value
        strSubTipo = Hoja1.Range("B" & i).Value
        strCuentaDebito = Hoja1.Range("C" & i).Value
        strCuentaBeneficiario = Hoja1.Range("D" & i).Value
        strMotivoEconomico = Hoja1.Range("E" & i).Value
        strGastosExterior = Hoja1.Range("F" & i).Value
        strInstitucionBancaria = Hoja1.Range("G" & i).Value
        strGrupoServicio = Hoja1.Range("H" & i).Value
        strServicio = Hoja1.Range("I" & i).Value
        strNumeroTarjeta = Hoja1.Range("J" & i).Value
        strTipoDocumento = Hoja1.Range("K" & i).Value
        strTipoCuenta = Hoja1.Range("L" & i).Value
        strNumeroIdentificacion = Hoja1.Range("M" & i).Value
        strBeneficiarioAgua = Hoja1.Range("N" & i).Value
        strOpcionPago = Hoja1.Range("O" & i).Value
        
        If (strTipo <> "") Then
              strLinea = "{""case"":""" & i & """, ""status"": ""pending"", ""msg"": """", ""orderStatus"":"""""
              Select Case strTipo
                    
                    Case "Transferencias"
                        strLinea = strLinea & ",""type"":""Transferencias"""
                         
                        Select Case strSubTipo
                         
                            Case "Al Exterior"
                                strSubTipoLine = "Al Exterior"
                                
                            Case "Eventuales"
                                strSubTipoLine = "Eventuales"
                            
                            Case "Registradas"
                                strSubTipoLine = "Registradas"
                            
                            Case "Entre Mis Cuentas"
                                strSubTipoLine = "Entre Mis Cuentas"
                            
                        End Select
                         
                        strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"
                          
                        Select Case strSubTipo
                          
                            Case "Eventuales"
                                If (strInstitucionBancaria <> "") Then
                                    strLinea = strLinea & " ,""institucion_bancaria"": """ & strInstitucionBancaria & """"
                                Else
                                    MsgBox "Campo -Institucion Bancaria- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strCuentaDebito <> "") Then
                                    strLinea = strLinea & " ,""cuenta_debito"": """ & strCuentaDebito & """"
                                Else
                                    MsgBox "Campo -Cuenta Debito- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strCuentaBeneficiario <> "") Then
                                    strLinea = strLinea & " ,""numero_cuenta_beneficiario"": """ & strCuentaBeneficiario & """"
                                Else
                                    MsgBox "Campo -Cuenta Beneficiaria- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strTipoDocumento <> "") Then
                                    strLinea = strLinea & " ,""tipo_documento"": """ & strTipoDocumento & """"
                                Else
                                    MsgBox "Campo -Tipo Documento- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strTipoCuenta <> "") Then
                                    strLinea = strLinea & " ,""tipo_cuenta"": """ & strTipoCuenta & """"
                                Else
                                    MsgBox "Campo -Tipo Cuenta- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strNumeroIdentificacion <> "") Then
                                    strLinea = strLinea & " ,""numero_identifiacion"": """ & strNumeroIdentificacion & """"
                                Else
                                    MsgBox "Campo -Numero de Identificacion- se encuentra vacio."
                                    Exit Sub
                                End If


                            Case "Al Exterior"
                            
                                If (strCuentaDebito <> "") Then
                                    strLinea = strLinea & " ,""cuenta_debito"": """ & strCuentaDebito & """"
                                Else
                                    MsgBox "Campo -Cuenta Debito- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strCuentaBeneficiario <> "") Then
                                    strLinea = strLinea & " ,""numero_cuenta_beneficiario"": """ & strCuentaBeneficiario & """"
                                Else
                                    MsgBox "Campo -Cuenta Beneficiaria- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strMotivoEconomico <> "") Then
                                    strLinea = strLinea & " ,""motivo_economico"": """ & strMotivoEconomico & """"
                                Else
                                    MsgBox "Campo -Motivo Economico- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strGastosExterior <> "") Then
                                    strLinea = strLinea & " ,""gastos_del_exterior"": """ & strGastosExterior & """"
                                Else
                                    MsgBox "Campo -Gastos del Exterior- se encuentra vacio."
                                    Exit Sub
                                End If
                            
                            Case "Entre Mis Cuentas"
                                If (strCuentaDebito <> "") Then
                                    strLinea = strLinea & " ,""cuenta_debito"": """ & strCuentaDebito & """"
                                Else
                                    MsgBox "Campo -Cuenta Debito- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strCuentaBeneficiario <> "") Then
                                    strLinea = strLinea & " ,""numero_cuenta_beneficiario"": """ & strCuentaBeneficiario & """"
                                Else
                                    MsgBox "Campo -Cuenta Beneficiaria- se encuentra vacio."
                                    Exit Sub
                                End If
                            
                            Case "Registradas"
                                If (strCuentaDebito <> "") Then
                                    strLinea = strLinea & " ,""cuenta_debito"": """ & strCuentaDebito & """"
                                Else
                                    MsgBox "Campo -Cuenta Debito- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strCuentaBeneficiario <> "") Then
                                    strLinea = strLinea & " ,""numero_cuenta_beneficiario"": """ & strCuentaBeneficiario & """"
                                Else
                                    MsgBox "Campo -Cuenta Beneficiaria- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                          End Select
                         
                    Case "Pagos"
                        strLinea = strLinea & ",""type"":""Pagos"""
                         
                        Select Case strSubTipo
                         
                            Case "Servicios Registrados"
                                strSubTipoLine = "Servicios Registrados"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"
                                
                                If (strNombreBeneficiario <> "") Then
                                    strLinea = strLinea & " ,""nombre_beneficiario"": """ & strNombreBeneficiario & """"
                                End If

                                If (strGrupoServicio <> "") Then
                                    strLinea = strLinea & " ,""grupo_servicios"": """ & strGrupoServicio & """"
                                Else
                                    MsgBox "Campo -Grupo de Servicios- se encuentra vacio."
                                End If
                                
                                If (strServicio <> "") Then
                                    strLinea = strLinea & " ,""servicio"": """ & strServicio & """"
                                Else
                                    MsgBox "Campo -Servicio- se encuentra vacio."
                                End If
                                
                                If (strBeneficiarioAgua <> "") Then
                                    strLinea = strLinea & " ,""beneficiario"": """ & strBeneficiarioAgua & """"
                                Else
                                    MsgBox "Campo -Beneficiario- se encuentra vacio."
                                End If
                                
                                If (strOpcionPago <> "") Then
                                    strLinea = strLinea & " ,""opcion_pago"": """ & strOpcionPago & """"
                                Else
                                    MsgBox "Campo -Opciones de Pago- se encuentra vacio."
                                End If
                            
                            Case "Servicios Eventuales"
                                strSubTipoLine = "Servicios Eventuales"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"
                                
                                If (strCuentaDebito <> "") Then
                                    strLinea = strLinea & " ,""cuenta_debito"": """ & strCuentaDebito & """"
                                Else
                                    MsgBox "Campo -Cuenta Debito- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strGrupoServicio <> "") Then
                                    strLinea = strLinea & " ,""grupo_servicios"": """ & strGrupoServicio & """"
                                Else
                                    MsgBox "Campo -Grupo de Servicios- se encuentra vacio."
                                End If
                                
                                If (strServicio <> "") Then
                                    strLinea = strLinea & " ,""servicio"": """ & strServicio & """"
                                Else
                                    MsgBox "Campo -Servicio- se encuentra vacio."
                                End If
                                
                                If (strNumeroTarjeta <> "") Then
                                    strLinea = strLinea & " ,""numero_tarjeta"": """ & strNumeroTarjeta & """"
                                Else
                                    MsgBox "Campo -Numero de Tarjeta- se encuentra vacio."
                                End If
                                
                                If (strOpcionPago <> "") Then
                                    strLinea = strLinea & " ,""opcion_pago"": """ & strOpcionPago & """"
                                Else
                                    MsgBox "Campo -Opciones de Pago- se encuentra vacio."
                                End If
                            
                            Case "Mis Tarjetas"
                                strSubTipoLine = "Mis Tarjetas"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"
                                
                                If (strCuentaDebito <> "") Then
                                    strLinea = strLinea & " ,""cuenta_debito"": """ & strCuentaDebito & """"
                                Else
                                    MsgBox "Campo -Cuenta Debito- se encuentra vacio."
                                    Exit Sub
                                End If
                                
                                If (strNumeroTarjeta <> "") Then
                                    strLinea = strLinea & " ,""numero_tarjeta"": """ & strNumeroTarjeta & """"
                                Else
                                    MsgBox "Campo -Numero de Tarjeta- se encuentra vacio."
                                End If
                            
                            Case "Tarjetas Registradas"
                                strSubTipoLine = "Tarjetas Registradas"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"
                            
                            Case "Tarjetas Eventuales"
                                strSubTipoLine = "Tarjetas Eventuales"
                                strLinea = strLinea & ",""subtype"":""" & strSubTipoLine & """"

                                If (strNumeroTarjeta <> "") Then
                                    strLinea = strLinea & " ,""grupo_servicios"": """ & strNumeroTarjeta & """"
                                Else
                                    MsgBox "Campo -Numero de Tarjeta- se encuentra vacio."
                                End If
                                   
                         End Select
              End Select
              fnTransferencias.Write strLinea & "}" & vbCrLf
        End If
    Next
    MsgBox "Se ha creado el archivo en la ruta: " & PathFile
End Sub

